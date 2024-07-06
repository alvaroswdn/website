// import thumbTrigonometri from './thumb/trigonometri.webp'
// import thumbIlmiah2 from './thumb/ilmiah2.webp'
// import thumbHIV from './thumb/hiv.webp'
// import thumbStroke from './thumb/stroke.webp'
// import thumbNotre from './thumb/notre.webp'
// import thumbPidana from './thumb/pidana.webp'
// import thumbIlmiah from './thumb/ilmiah.webp'
// import thumbBronkitis from './thumb/bronkitis.webp'
// import thumbGAM from './thumb/gam.webp'
// import thumbAnne from './thumb/anne.webp'
// import thumbKebaikan from './thumb/kebaikan.webp'
// import thumbProklamasi from './thumb/proklamasi.webp'

export enum Link {
  MODAL = 0,
  FILE = 1,
}

type Project = {
  thumb: string
  link: Link
  file: string
  alt: string
}

export const projectList: Project[] = [
  {
    thumb: '/projects/thumb/trigonometri.webp',
    link: Link.FILE,
    file: 'https://drive.google.com/file/d/1jR8vbaOXDhvklQFpZvdEGqAQwKB6R-vW/view?usp=sharing',
    alt: 'limit trigonometri',
  },
  {
    thumb: '/projects/thumb/ilmiah2.webp',
    link: Link.FILE,
    file: '/projects/content/ilmiah2.pdf',
    alt: 'poster karya ilmiah 2',
  },
  {
    thumb: '/projects/thumb/hiv.webp',
    link: Link.MODAL,
    file: '/projects/content/hiv.webp',
    alt: 'infografis HIV',
  },
  {
    thumb: '/projects/thumb/stroke.webp',
    link: Link.MODAL,
    file: '/projects/content/stroke.webp',
    alt: 'infografis stroke',
  },
  {
    thumb: '/projects/thumb/notre.webp',
    link: Link.FILE,
    file: '/projects/content/notre.pdf',
    alt: 'presentasi notre dame',
  },
  {
    thumb: '/projects/thumb/pidana.webp',
    link: Link.FILE,
    file: '/projects/content/pidana.pdf',
    alt: 'presentasi hukum pidana',
  },
  {
    thumb: '/projects/thumb/ilmiah.webp',
    link: Link.FILE,
    file: '/projects/content/ilmiah.pdf',
    alt: 'karya ilmiah',
  },
  {
    thumb: '/projects/thumb/bronkitis.webp',
    link: Link.MODAL,
    file: '/projects/content/bronkitis.webp',
    alt: 'poster penyakit pernapasan bronkitis',
  },
  {
    thumb: '/projects/thumb/gam.webp',
    link: Link.MODAL,
    file: '/projects/content/gam.webp',
    alt: 'poster gerakan aceh merdeka',
  },
  {
    thumb: '/projects/thumb/anne.webp',
    link: Link.MODAL,
    file: '/projects/content/anne.webp',
    alt: 'poster biografi anne frank',
  },
  {
    thumb: '/projects/thumb/kebaikan.webp',
    link: Link.MODAL,
    file: '/projects/content/kebaikan.webp',
    alt: 'poster kampanye kebaikan',
  },
  {
    thumb: '/projects/thumb/proklamasi.webp',
    link: Link.FILE,
    file: '/projects/content/proklamasi.pdf',
    alt: 'poster proklamasi',
  },
]
