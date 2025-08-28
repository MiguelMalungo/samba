#!/bin/bash

# Update SAMBA-CERTIFIERING to be bold
find /Users/josemiguelferrazguedes/Samba2025 -name "*.html" | xargs sed -i '' 's/<div style="color: #3CB371; font-weight: 900; text-align: center; font-size: 15px; font-family: '\''Roboto Condensed'\'', sans-serif; letter-spacing: -0.5px; line-height: 1.1;">SAMBA-<br>CERTIFIERING<\/div>/<div style="color: #3CB371; font-weight: bold; text-align: center; font-size: 15px; font-family: '\''Roboto Condensed'\'', sans-serif; letter-spacing: -0.5px; line-height: 1.1;"><strong>SAMBA-<br>CERTIFIERING<\/strong><\/div>/g'

# Update PELADA-LEDARE to be bold
find /Users/josemiguelferrazguedes/Samba2025 -name "*.html" | xargs sed -i '' 's/<div style="color: #3CB371; font-weight: 900; text-align: center; font-size: 15px; font-family: '\''Roboto Condensed'\'', sans-serif; letter-spacing: -0.5px; line-height: 1.1;">PELADA-<br>LEDARE<\/div>/<div style="color: #3CB371; font-weight: bold; text-align: center; font-size: 15px; font-family: '\''Roboto Condensed'\'', sans-serif; letter-spacing: -0.5px; line-height: 1.1;"><strong>PELADA-<br>LEDARE<\/strong><\/div>/g'
