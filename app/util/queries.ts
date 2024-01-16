export const allProducts = `
*[_type == 'product']{
    _id,
    name,
    color, price,
    'slug':slug.current,
    'images': images[0]{
      'altText': altText, 
      'url': image.asset->url
    },
  }
`
