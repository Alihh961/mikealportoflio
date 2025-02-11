console.log('Babel file works!')
import { Pane } from 'https://cdn.skypack.dev/tweakpane@4.0.4'
import gsap from 'https://cdn.skypack.dev/gsap@3.12.0'
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger'

const config = {
  text: `1.Réalisation et Montage Vidéo :

- Films cinématographiques

- Vidéos promotionnelles et publicitaires

- Réels pour les réseaux sociaux

- Trailers dynamiques et cinématiques

2.Photographie :

- Portraits individuels ou de famille

- Événements privés et professionnels (anniversaires, mariages, soirées)

- Séances photo exclusives et artistiques

3.Conception Complète :

- Développement d’idées et storyboard

- Production et post-production

- Montage avec des techniques avancées`,
  theme: 'system',
  hue: 320,
  saturation: 100,
  lightness: 50,
  speed: 0.8,
  show: false,
  unclip: false,
}

const random = (min, max) =>
  Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
  )

const trigger = document.querySelector('.services-container section:first-of-type')
const headings = trigger.querySelectorAll('h2')
const spans = trigger.querySelectorAll('h2 span')

const ctrl = new Pane({
  title: 'Config',
  expanded: true,
})

const update = () => {
  for (const span of spans) {
    span.innerHTML = `${config.text} `
  }
  trigger.style.setProperty('--text-length', config.text.length + 1)
  document.documentElement.style.setProperty('--cursor-hue', config.hue)
  document.documentElement.style.setProperty('--cursor-blink', config.speed)
  document.documentElement.style.setProperty(
    '--cursor-saturation',
    config.saturation
  )
  document.documentElement.style.setProperty(
    '--cursor-lightness',
    config.lightness
  )
  document.documentElement.dataset.theme = config.theme
  document.documentElement.dataset.showLayers = config.show
  document.documentElement.dataset.unclip = config.unclip
}

const sync = (event) => {
  if (
    !document.startViewTransition ||
    event.target.controller.view.labelElement.innerText !== 'Theme'
  )
    return update()
  document.startViewTransition(() => update())
}

const cursorFolder = ctrl.addFolder({ title: 'Cursor', expanded: false })

cursorFolder.addBinding(config, 'hue', {
  min: 0,
  max: 359,
  step: 1,
  label: 'Hue',
})
cursorFolder.addBinding(config, 'saturation', {
  min: 0,
  max: 100,
  step: 1,
  label: 'Saturation',
})
cursorFolder.addBinding(config, 'lightness', {
  min: 0,
  max: 100,
  step: 1,
  label: 'Lightness',
})
cursorFolder.addBinding(config, 'speed', {
  min: 0.1,
  max: 2,
  step: 0.01,
  label: 'Blink (s)',
})

cursorFolder.addButton({ title: 'Randomise' }).on('click', () => {
  config.hue = random(0, 359)
  config.saturation = random(0, 100)
  config.lightness = random(0, 100)
  ctrl.refresh()
})

ctrl.addBinding(config, 'show', {
  label: 'Show layers',
})
ctrl.addBinding(config, 'unclip', {
  label: 'Unclip layers',
})

ctrl.addBinding(config, 'theme', {
  label: 'Theme',
  options: {
    System: 'system',
    Light: 'light',
    Dark: 'dark',
  },
})

ctrl.on('change', sync)
update()

const hasScrollSupport = CSS.supports(
  '(animation-timeline: view()) and (animation-range: 0 100%)'
)
if (!hasScrollSupport) {
  gsap.registerPlugin(ScrollTrigger)
  console.info('registered GSAP ScrollTrigger')
  // const trigger = document.querySelector('main section:first-of-type')
  const text = trigger.querySelector('blockquote')
  gsap.fromTo(
    text,
    {
      '--idx': 0,
    },
    {
      '--idx': config.text.length + 1,
      duration: 1,
      ease: `steps(${config.text.length + 1})`,
      scrollTrigger: {
        trigger,
        scrub: 0.2,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          text.style.setProperty('--velocity', Math.abs(self.getVelocity()))
        },
        onScrubComplete: () => text.style.setProperty('--velocity', 0),
      },
    }
  )
}
