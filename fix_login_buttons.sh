#!/bin/bash

# Fix all pages to ensure login buttons stay at the bottom of hero sections
for file in *.html; do
  if [ "$file" != "index.html" ]; then
    # Check if file has a hero section that needs fixing
    if grep -q "class=\"page-hero\"" "$file"; then
      # Fix hero section styling to match index.html
      sed -i '' 's/<section class="page-hero" style="[^"]*"/<section class="page-hero" style="width: 100vw; max-width: 100%; margin: 0; padding: 0; overflow-x: hidden; position: relative; height: 100vh; background-size: cover; background-position: center;/g' "$file"
      
      # Also make sure login buttons have consistent styling
      if grep -q "class=\"login-buttons\"" "$file"; then
        sed -i '' 's/<div class="login-buttons" style="[^"]*"/<div class="login-buttons" style="position: absolute; bottom: 0; right: 20px; display: flex; gap: 5px; z-index: 10; padding-bottom: 10px;/g' "$file"
      fi
    fi
  fi
done

echo "All login buttons fixed across the site."
