export function getImageUrl(person,size) {
    return(
      // 'https://i.imgur.com/'+
      // imageId+size+'.jpg'
      `https://i.imgur.com/${person.imageId}${size}.jpg`
    )
  }
  