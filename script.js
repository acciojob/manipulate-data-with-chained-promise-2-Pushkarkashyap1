 const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

        document.getElementById("original").textContent = numbers.join(", ");

        function manipulateData(arr) {
            return new Promise((resolve) => {
                const evenNumbers = arr.filter(num => num % 2 === 0);
                document.getElementById("filtered").textContent = evenNumbers.join(", ");
                resolve(evenNumbers);
            })
            .then((evenNumbers) => {
                return new Promise((resolve) => {
                    const multiplied = evenNumbers.map(num => num * 2);
                    document.getElementById("multiplied").textContent = multiplied.join(", ");
                    resolve(multiplied);
                });
            });
        }

        manipulateData(numbers);
    </script>

</body>
</html>

