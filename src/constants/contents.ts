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
      discription: 'button',
      example: '/components/button'
    },
    {
      name: 'Checkbox',
      path: 'src/components/Checkbox.tsx',
      discription: 'checkbox state',
      example: '/components/checkbox'
    },
    {
      name: 'Input',
      path: 'src/components/Input.tsx',
      discription: 'input form',
      example: '/components/input'
    },
    {
      name: 'Radio',
      path: 'src/components/Radio.tsx',
      discription: 'radio value',
      example: '/components/radio'
    },
    {
      name: 'Slider',
      path: 'src/components/Slider.tsx',
      discription: 'range slider component',
      example: '/components/range-slider'
    },
    {
      name: 'Switch',
      path: '',
      discription: '',
      example: ''
    }
];

export { componentBitsList }