#!/bin/bash
# ==============================================================================
# Extract all images and videos from humbleloft.ca (Wix site)
# Saves to public/images/extracted/ organized by page
# ==============================================================================

set -e

BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$BASE_DIR/public/images/extracted"
mkdir -p "$OUT_DIR"

# All pages to scrape
declare -A PAGES=(
  [home]="https://www.humbleloft.ca/"
  [about]="https://www.humbleloft.ca/about"
  [trainers]="https://www.humbleloft.ca/about-1"
  [space]="https://www.humbleloft.ca/about-2"
  [strength]="https://www.humbleloft.ca/about-3"
  [boxing]="https://www.humbleloft.ca/about-3-1"
  [pilates]="https://www.humbleloft.ca/about-3-1-1"
  [contact]="https://www.humbleloft.ca/blank"
)

TOTAL_IMAGES=0
TOTAL_VIDEOS=0

for page in "${!PAGES[@]}"; do
  url="${PAGES[$page]}"
  page_dir="$OUT_DIR/$page"
  mkdir -p "$page_dir"
  
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "📄 Scraping: $page ($url)"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  
  # Fetch the page HTML
  HTML=$(curl -s -L "$url")
  
  # ── Extract image URLs ──
  # Wix images are on static.wixstatic.com/media/
  # Pattern: 280c6e_XXXX~mv2.jpg (or .png, .webp)
  IMG_IDS=$(echo "$HTML" | grep -oE '280c6e_[a-f0-9]{20,40}~mv2\.(jpg|png|webp|jpeg|gif)' | sort -u || true)
  
  IMG_COUNT=0
  if [ -n "$IMG_IDS" ]; then
    while IFS= read -r img_id; do
      # Determine extension
      ext="${img_id##*.}"
      # Build the clean download URL (high quality)
      download_url="https://static.wixstatic.com/media/${img_id}"
      filename="${page}_image_$(printf '%02d' $IMG_COUNT).${ext}"
      
      echo "  📷 Downloading: $img_id"
      curl -s -L -o "$page_dir/$filename" "$download_url" && IMG_COUNT=$((IMG_COUNT + 1)) || echo "    ⚠️  Failed: $download_url"
    done <<< "$IMG_IDS"
  fi
  echo "  ✅ Downloaded $IMG_COUNT images"
  TOTAL_IMAGES=$((TOTAL_IMAGES + IMG_COUNT))
  
  # ── Extract video URLs ──
  # Wix videos: video/280c6e_XXXX/1080p/mp4/file.mp4
  VIDEO_IDS=$(echo "$HTML" | grep -oE 'video/280c6e_[a-f0-9]{20,40}/1080p/mp4/file\.mp4' | sort -u || true)
  
  VID_COUNT=0
  if [ -n "$VIDEO_IDS" ]; then
    while IFS= read -r vid_path; do
      download_url="https://video.wixstatic.com/${vid_path}"
      # Extract the video hash for the filename
      vid_hash=$(echo "$vid_path" | grep -oE '280c6e_[a-f0-9]+')
      filename="${page}_video_$(printf '%02d' $VID_COUNT).mp4"
      
      echo "  🎬 Downloading: $vid_hash (1080p)"
      curl -s -L -o "$page_dir/$filename" "$download_url" && VID_COUNT=$((VID_COUNT + 1)) || echo "    ⚠️  Failed: $download_url"
    done <<< "$VIDEO_IDS"
  fi
  echo "  ✅ Downloaded $VID_COUNT videos"
  TOTAL_VIDEOS=$((TOTAL_VIDEOS + VID_COUNT))
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 DONE! Total: $TOTAL_IMAGES images, $TOTAL_VIDEOS videos"
echo "📁 Saved to: $OUT_DIR"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Show what was downloaded
echo "📋 Files by page:"
for page in "${!PAGES[@]}"; do
  page_dir="$OUT_DIR/$page"
  count=$(find "$page_dir" -type f 2>/dev/null | wc -l | tr -d ' ')
  if [ "$count" -gt 0 ]; then
    echo ""
    echo "  [$page] ($count files)"
    ls -lh "$page_dir" | tail -n +2 | awk '{print "    " $NF " (" $5 ")"}'
  fi
done
