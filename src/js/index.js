import sum from './sum'
import substract from './substract'
import multiply, { pow } from './multiply'

const c = console.log
c('sum 2 and 3: ', sum(2, 3))
c('substract 100 less 20: ', substract(100, 20))
c('multiply 2 by 100: ', multiply(2, 100))
c('The 20 raised to 3 : ', pow(20, 3))
