function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		return console.log('nie prawidłowe dane');
	}
	return a*h/2;
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(20, 35),
	triangle3Area = getTriangleArea(25, 39);

console.log(triangle3Area);
console.log(triangle2Area);
console.log(triangle1Area);
