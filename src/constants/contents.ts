interface CompListType {
  name: string,
  path?: string,
  discription?: string,
  example?: string,
  type?: string
}

// # Component List
const componentBitsList: Array<CompListType> = [
    {
      name: 'Button',
      path: 'src/components/Button.tsx',
      discription: '버튼',
      example: '/components/button'
    },
    {
      name: 'Checkbox',
      path: 'src/components/Checkbox.tsx',
      discription: '체크박스',
      example: '/components/checkbox'
    },
    {
      name: 'Input',
      path: '',
      discription: '',
      example: ''
    },
    {
      name: 'Radio',
      path: '',
      discription: '',
      example: ''
    },
    {
      name: 'Slider',
      path: '',
      discription: '',
      example: ''
    },
    {
      name: 'Switch',
      path: '',
      discription: '',
      example: ''
    }
];

export { componentBitsList }