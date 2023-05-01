interface CompListType {
  name: String,
  path: String,
  discription: String,
  example: String,
  type?: String
}

// # Component List
const componentBitsList: Array<CompListType> = [
    {
      name: '버튼',
      path: '경로',
      discription: '설명',
      example: '예제'
    }
];

export { componentBitsList }