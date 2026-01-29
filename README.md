# Premium Portfolio Website

A high-end, premium portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion. Features a dark-themed, modern aesthetic with advanced animations and a glassmorphism design.

## Features

- 🎨 **Modern Dark Theme** - Sleek, professional dark aesthetic with custom animated background
- ✨ **Advanced Animations** - Smooth scroll reveals, micro-interactions, and fluid transitions powered by Framer Motion
- 🪟 **Glassmorphism Design** - Beautiful blurred glass effects on navigation and components
- 📱 **Fully Responsive** - Optimized for both mobile and desktop experiences
- 🎯 **Sections**:
  - Hero/Landing page with call-to-action
  - About Me section
  - Web Projects showcase (grid layout)
  - Graphic Design portfolio (visual gallery)
  - Other Skills & Expertise
- 🔘 **Interactive Elements** - Magnetic/glow button effects with hover animations
- 🧩 **Modular Components** - Easy to edit and customize

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Adding Your Projects

1. **Web Projects**: Edit `components/sections/WebProjects.tsx` and update the `projects` array with your actual project data.

2. **Graphic Design**: Edit `components/sections/GraphicDesign.tsx` and update the `designProjects` array with your design work.

3. **About Me**: Customize the content in `components/sections/About.tsx`.

4. **Skills**: Update the skills in `components/sections/OtherSkills.tsx`.

### Adding Images

**Important**: All images should be placed in the `public/images/` folder structure:

1. **Web Project Screenshots**: Place in `public/images/web-projects/`
   - `s-vision.jpg`
   - `we-serveo.jpg`
   - `smart-assign.jpg`
   - `seeinc-online.jpg`
   - `nicole-designs.jpg`

2. **Graphic Design Images**: Place in `public/images/graphic-design/`
   - `we-serveo-instagram.jpg`
   - `roofer-domination.jpg`
   - `hydrogyn-official.jpg`
   - `b2h-movers.jpg`
   - `dubi-homes.jpg`
   - `smart-assign-instagram.jpg`

See `public/images/README.md` for detailed instructions.

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles are inline with Tailwind classes

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── WebProjects.tsx
│   │   ├── GraphicDesign.tsx
│   │   └── OtherSkills.tsx
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   └── RevealOnScroll.tsx
│   ├── Navbar.tsx          # Navigation component
│   └── AnimatedBackground.tsx
└── public/                 # Static assets (images, etc.)
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## License

This project is open source and available for personal and commercial use.

