const images = import.meta.glob('~/public/header_images/*.{jpg,jpeg,png,gif,webp}', {
    eager: true,
    import: 'default',
  })
  
  export const headerImages = Object.values(images).map((image) => image as string)