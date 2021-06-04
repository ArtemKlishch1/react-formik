const setupTags = recipes => {
  //   const allTags = [
  //     ...new Set(recipes.map(r => r.content.tags).flat()),
  //   ].map(tag => ({ tagName: tag, number: 0 }))
  //   for (let i = 0; i < allTags.length; i++) {
  //     for (let y = 0; y < recipes.length; y++) {
  //       const isThereTag = recipes[y].content.tags.find(
  //         t => t === allTags[i].tagName
  //       )
  //       if (isThereTag) allTags[i].number += 1
  //     }
  //   }

  const allTags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] += 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })
  return newTags
}
export default setupTags
