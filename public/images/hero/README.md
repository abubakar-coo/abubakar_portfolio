# Hero Section Background Images

## Image Requirements

### Desktop Background Image
- **File Name**: `hero-bg.jpg`
- **Recommended Size**: 1920px × 1080px (16:9 aspect ratio)
- **Minimum Size**: 1600px × 900px
- **Format**: JPG or WebP (optimized for web)
- **File Size**: Keep under 500KB for optimal performance
- **Location**: `public/images/hero/hero-bg.jpg`

### Mobile Background Image
- **File Name**: `hero-bg-mobile.jpg`
- **Recommended Size**: 768px × 1024px (3:4 aspect ratio) or 375px × 667px (iPhone standard)
- **Format**: JPG or WebP (optimized for web)
- **File Size**: Keep under 300KB for optimal performance
- **Location**: `public/images/hero/hero-bg-mobile.jpg`

## Why Separate Mobile Image?

Mobile devices have different screen dimensions and orientations. Using a separate mobile-optimized image ensures:
- Better composition for portrait orientation
- Faster loading times (smaller file size)
- Proper image cropping and focus
- Better user experience on mobile devices

## Image Guidelines

1. **Content**: Choose an image that complements your portfolio theme
2. **Contrast**: Ensure text remains readable (dark overlay is applied at 40% opacity)
3. **Focus**: Center important elements as the image will be used as background
4. **Quality**: Use high-quality images but optimize for web to maintain fast loading

## Current Overlay Settings

- **Desktop & Mobile**: 40% black overlay (`bg-black/40`)
- This allows the background image to be more visible while maintaining text readability

## Adding Your Images

1. Place `hero-bg.jpg` in `public/images/hero/` for desktop
2. Place `hero-bg-mobile.jpg` in `public/images/hero/` for mobile
3. The website will automatically use the correct image based on screen size

