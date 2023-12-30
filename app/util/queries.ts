export const allProducts = `
*[_type == 'product' && stockQuantity > 0]{
    _id,
    name,
    color, price,
    'slug':slug.current,
    'images': images[0]{
      'altText': altText, 
      'url': image.asset->url
    },
    videos[] {
      "url": videoFile.asset->url,
      altText
    }
  }
`
