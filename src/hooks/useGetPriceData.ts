import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import priceContracts from '../constants/tokenPriceContracts'
import { useMulticallContract } from './useContract'
import ERC20_INTERFACE from '../constants/abis/erc20'


type ApiResponse = {
  prices: {
    [key: string]: string
  }
  update_at: string
}
const useGetPriceData = () => {
  const [data, setData] = useState<number>(0)

  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(multicallContract){
          const {tokenAddress, busdAddress, lpAddress} = priceContracts;
          const calls = [
            [tokenAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
            [busdAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
          ];

          const [resultsBlockNumber, result] = await multicallContract.aggregate(calls);
          const [combustAmount, busdAmount] = result.map(r=>ERC20_INTERFACE.decodeFunctionResult("balanceOf", r));

          const combust = new BigNumber(combustAmount);
          const busd = new BigNumber(busdAmount);
          const combustPrice = busd.div(combust).toNumber();
          setData(combustPrice)
        }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [multicallContract])

  return data
}

export default useGetPriceData
