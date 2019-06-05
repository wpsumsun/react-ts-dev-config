let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context( './icons', true, /\.svg$/))
} catch (e) {
  console.log(e)
}
// https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i