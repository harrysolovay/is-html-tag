const existenceMap = {
  a: true,
  abbr: true,
  acronym: true,
  address: true,
  applet: true,
  area: true,
  article: true,
  aside: true,
  audio: true,
  b: true,
  base: true,
  basefont: true,
  bdi: true,
  bdo: true,
  bgsound: true,
  big: true,
  blink: true,
  blockquote: true,
  body: true,
  br: true,
  button: true,
  canvas: true,
  caption: true,
  center: true,
  circle: true,
  cite: true,
  clipPath: true,
  code: true,
  col: true,
  colgroup: true,
  command: true,
  content: true,
  data: true,
  datalist: true,
  dd: true,
  defs: true,
  del: true,
  details: true,
  dfn: true,
  dialog: true,
  dir: true,
  div: true,
  dl: true,
  dt: true,
  element: true,
  ellipse: true,
  em: true,
  embed: true,
  fieldset: true,
  figcaption: true,
  figure: true,
  font: true,
  footer: true,
  foreignObject: true,
  form: true,
  frame: true,
  frameset: true,
  g: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  head: true,
  header: true,
  hgroup: true,
  hr: true,
  html: true,
  i: true,
  iframe: true,
  image: true,
  img: true,
  input: true,
  ins: true,
  isindex: true,
  kbd: true,
  keygen: true,
  label: true,
  legend: true,
  li: true,
  line: true,
  linearGradient: true,
  link: true,
  listing: true,
  main: true,
  map: true,
  mark: true,
  marquee: true,
  mask: true,
  math: true,
  menu: true,
  menuitem: true,
  meta: true,
  meter: true,
  multicol: true,
  nav: true,
  nextid: true,
  nobr: true,
  noembed: true,
  noframes: true,
  noscript: true,
  object: true,
  ol: true,
  optgroup: true,
  option: true,
  output: true,
  p: true,
  param: true,
  path: true,
  pattern: true,
  picture: true,
  plaintext: true,
  polygon: true,
  polyline: true,
  pre: true,
  progress: true,
  q: true,
  radialGradient: true,
  rb: true,
  rbc: true,
  rect: true,
  rp: true,
  rt: true,
  rtc: true,
  ruby: true,
  s: true,
  samp: true,
  script: true,
  section: true,
  select: true,
  shadow: true,
  slot: true,
  small: true,
  source: true,
  spacer: true,
  span: true,
  stop: true,
  strike: true,
  strong: true,
  style: true,
  sub: true,
  summary: true,
  sup: true,
  svg: true,
  table: true,
  tbody: true,
  td: true,
  template: true,
  text: true,
  textarea: true,
  tfoot: true,
  th: true,
  thead: true,
  time: true,
  title: true,
  tr: true,
  track: true,
  tspan: true,
  tt: true,
  u: true,
  ul: true,
  var: true,
  video: true,
  wbr: true,
  xmp: true,
}

const isHTMLTagName = inQuestion => !!existenceMap[inQuestion]
module.exports = isHTMLTagName;
module.exports.isHTMLTagName = isHTMLTagName;