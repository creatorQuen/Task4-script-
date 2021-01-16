function printTriangle() {
    let counter = 0;
    const maxstring = 5;

    while(counter <= maxstring) {
        let result = '';
            for (let i = 0; i < counter; i++) {
            result += '#';
            }
        console.log(result);
        counter++;
    }
}

printTriangle();