import { MenuEntry } from '@neptuneswap/neptuneswapuikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.neptuneswap.org/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://app.neptuneswap.org/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://app.neptuneswap.org/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/neptunes-swap',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@neptune_finance',
      },
    ],
  },
]

export default config
