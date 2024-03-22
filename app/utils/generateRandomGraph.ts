import gaussian from 'gaussian'
import type { GraphPoint } from 'react-native-graph'

export function weightedRandom(
  mean: number,
  variance: number,
  min: number,
  max: number,
): number {
  var distribution = gaussian(mean, variance)
  var randomValue
  // Ajuste para o intervalo [min, max] e formate para quatro casas decimais
  do {
    randomValue = distribution.ppf(Math.random())
  } while (randomValue < min || randomValue > max)
  return parseFloat(randomValue.toFixed(4))
}

export function generateRandomGraphData(length: number): GraphPoint[] {
  return Array<number>(length)
    .fill(0)
    .map((_, index) => ({
      date: new Date(
        new Date(2000, 0, 1).getTime() + 1000 * 60 * 60 * 24 * index,
      ),
      value: weightedRandom(3.25, Math.pow(index + 1, 2), 3.001, 3.499),
    }))
}
