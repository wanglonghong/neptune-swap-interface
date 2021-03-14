import { ChainId } from '@neptuneswap/neptuneswapsdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.BSCTESTNET]: '0x91638ca44EA740C45094a96BfdB1dE0C53F15Ca0'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
