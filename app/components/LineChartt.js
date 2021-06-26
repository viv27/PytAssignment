
import React from 'react'
import { Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


export default function LineChartt({fiftyFivePlus,fortyFivePlus,thirtyFivePlus,twentyFivePlus,fifteen,five}) {

    return(
     <LineChart      
    data={{
      labels: ["13-18", "18-25", "25-35", "35-45", "45-55", "55+"],
      datasets: [
        {
          data: [
            fiftyFivePlus,
            fortyFivePlus,
            thirtyFivePlus,
            twentyFivePlus,
           fifteen,
            five
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
    )
}