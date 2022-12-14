/* Решить задачу
Дан массив целых чисел произвольной длины.Написать функцию которая будет выводить максимальную сумму неразрывной последовательности элементов в массиве.Суммировать элементы можно только последовательно.
	Пример: [-1, 10, -9, 5, 6, -10]
	Вывод: 11
 */

let a = [-1, 10, -9, 5, 6, -10];

function maxSum(arr) {
	let sum = 0;
	let max_sum = 0;
	arr.forEach((e, index, mas) => {
		sum += e;
		if (e + 1 != mas[index + 1]) {
			max_sum = max_sum < sum ? sum : max_sum;
			sum = 0
		}
	})
	return max_sum;
}
console.log(maxSum(a));