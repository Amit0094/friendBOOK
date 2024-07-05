
import { counter } from '../script.js';


const member_number = document.querySelector('.member_number')
member_number.textContent = counter

const percentage = document.querySelector('.percentage')
const bar = document.querySelector('.bar')

bar.style.width = `${counter}%`
percentage.textContent = `${counter}%`


