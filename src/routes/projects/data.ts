// @ts-nocheck

import thumbTrigonometri from './thumb/trigonometri.webp?enhanced'
import thumbIlmiah2 from './thumb/ilmiah2.webp?enhanced'
import thumbHIV from './thumb/hiv.webp?enhanced'
import thumbStroke from './thumb/stroke.webp?enhanced'
import thumbNotre from './thumb/notre.webp?enhanced'
import thumbPidana from './thumb/pidana.webp?enhanced'
import thumbIlmiah from './thumb/ilmiah.webp?enhanced'
import thumbBronkitis from './thumb/bronkitis.webp?enhanced'
import thumbGAM from './thumb/gam.webp?enhanced'
import thumbAnne from './thumb/anne.webp?enhanced'
import thumbKebaikan from './thumb/kebaikan.webp?enhanced'
import thumbProklamasi from './thumb/proklamasi.webp?enhanced'

import contentHIV from './content/hiv.webp?enhanced'
import contentStroke from './content/stroke.webp?enhanced'
import contentBronkitis from './content/bronkitis.webp?enhanced'
import contentGAM from './content/gam.webp?enhanced'
import contentAnne from './content/anne.webp?enhanced'
import contentKebaikan from './content/kebaikan.webp?enhanced'

export enum Link {
  MODAL = 0,
  FILE = 1,
}

type Project = {
  thumb: string
  link: Link
  content: string
  alt: string
}

export const projectList: Project[] = [
  {
    thumb: thumbTrigonometri,
    link: Link.FILE,
    content:
      'https://drive.google.com/content/d/1jR8vbaOXDhvklQFpZvdEGqAQwKB6R-vW/view?usp=sharing',
    alt: 'limit trigonometri',
  },
  {
    thumb: thumbIlmiah2,
    link: Link.FILE,
    content: '/projects/content/ilmiah2.pdf',
    alt: 'poster karya ilmiah 2',
  },
  {
    thumb: thumbHIV,
    link: Link.MODAL,
    content: contentHIV,
    alt: 'infografis HIV',
  },
  {
    thumb: thumbStroke,
    link: Link.MODAL,
    content: contentStroke,
    alt: 'infografis stroke',
  },
  {
    thumb: thumbNotre,
    link: Link.FILE,
    content: '/projects/content/notre.pdf',
    alt: 'presentasi notre dame',
  },
  {
    thumb: thumbPidana,
    link: Link.FILE,
    content: '/projects/content/pidana.pdf',
    alt: 'presentasi hukum pidana',
  },
  {
    thumb: thumbIlmiah,
    link: Link.FILE,
    content: '/projects/content/ilmiah.pdf',
    alt: 'karya ilmiah',
  },
  {
    thumb: thumbBronkitis,
    link: Link.MODAL,
    content: contentBronkitis,
    alt: 'poster penyakit pernapasan bronkitis',
  },
  {
    thumb: thumbGAM,
    link: Link.MODAL,
    content: contentGAM,
    alt: 'poster gerakan aceh merdeka',
  },
  {
    thumb: thumbAnne,
    link: Link.MODAL,
    content: contentAnne,
    alt: 'poster biografi anne frank',
  },
  {
    thumb: thumbKebaikan,
    link: Link.MODAL,
    content: contentKebaikan,
    alt: 'poster kampanye kebaikan',
  },
  {
    thumb: thumbProklamasi,
    link: Link.FILE,
    content: '/projects/content/proklamasi.pdf',
    alt: 'poster proklamasi',
  },
]
