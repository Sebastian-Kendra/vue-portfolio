export const data = [
  {
    id: 1,
    name: 'Zas dačo',
    cards: [
      {
        id: 1,
        text: 'Ten bol očividne prvý pretože ked niečo niekto svtvori musí sa vediet kto tu bol hneď keď ho stvoril',
        labels: ['green'],
        tags: ['first', 'card'],
      },
      { id: 2, text: 'Preplávem aj plávajucú podlahu' },
      {
        id: 3,
        text: 'Ak si nevedel tak už vieš',
        labels: ['blue', 'green', 'purple'],
      },
      {
        id: 4,
        text: 'Chod do obchodu prejdi sa (autom)',
        image: {
          filename: 'Auto.jpg',
          alt: 'Auto',
        },
        labels: ['blue', 'green', 'purple'],
      },
      { id: 5, text: 'Už keď sa pojdeš prejsť tak choď do obchodu' },
    ],
  },
  {
    id: 2,
    name: 'Tipy a triky',
    cards: [
      { id: 1, text: 'Bez dalších otázok', labels: ['yellow', 'green'] },
      {
        id: 2,
        text: 'Ak si hladný tak sa najedz',
        labels: ['red', 'red', 'blue'],
      },
      { id: 3, text: 'Neprišiel mi obed ešte čo si jak' },
    ],
  },
  {
    id: 3,
    name: 'Múdrosti',
    cards: [
      {
        id: 1,
        text: 'Dievča + Chlapec = Kaviareň',
        labels: ['red', 'ping', 'ping', 'ping', 'ping', 'ping', 'red'],
        tags: ['👄', '🥰', '💍', '❤️'],
        image: {
          filename: 'Ja-a-ty.jpeg',
          alt: 'Dievča a chlapec',
        },
      },
      { id: 2, text: 'Ak nevieš o čom to je tak si to pozri' },
      { id: 3, text: 'Naučíš sa niečo tak to budeš vedieť' },
      { id: 5, text: 'Ak už to vieš tak sa to učiť nemusíš' },
    ],
  },
]
