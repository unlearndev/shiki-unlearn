export const unlearn = {
  name: 'unlearn-red',
  type: 'dark',
  colors: {
    'editor.background': '#1e1e1e',
    'editor.foreground': '#d4d4d6',
  },
  settings: [
    { settings: { foreground: '#d4d4d6', background: '#1e1e1e' } },
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#6b6d76', fontStyle: 'italic' },
    },
    {
      scope: [
        'keyword',
        'keyword.control',
        'storage',
        'storage.type',
        'storage.modifier',
        'keyword.operator.new',
        'keyword.operator.expression',
        'variable.language',
      ],
      settings: { foreground: '#ff3b30' },
    },
    {
      scope: ['constant.numeric', 'constant.language', 'constant.language.boolean'],
      settings: { foreground: '#ff7a6e' },
    },
    {
      scope: ['string', 'string.quoted', 'string.template', 'punctuation.definition.string'],
      settings: { foreground: '#f3a39d' },
    },
    {
      scope: ['entity.name.type', 'support.type', 'support.class', 'entity.name.class'],
      settings: { foreground: '#ff8a80' },
    },
    {
      scope: ['entity.name.function', 'support.function', 'meta.function-call entity.name.function'],
      settings: { foreground: '#ededef' },
    },
    {
      scope: ['variable', 'variable.other', 'meta.object-literal.key', 'support.variable'],
      settings: { foreground: '#d4d4d6' },
    },
    {
      scope: ['punctuation', 'meta.brace', 'punctuation.separator', 'punctuation.terminator'],
      settings: { foreground: '#8a8b93' },
    },
  ],
}

export default unlearn
