function* fibonacci() {
        let [prev, curr] = [0, 1]
        for (;;) {
            [prev, curr] = [curr, prev + curr]
            // 将中间值通过 yield 返回，并且保留函数执行的状态，因此可以非常简单的实现 fibonacci
            yield curr
        }
    }
    //取十个
    /* var fi = fibonacci();
    for (let i = 0; i < 10; i++) {
        console.log(fi.next())
    } */

//取1000以内
for (let n of fibonacci()) {
    if (n > 1000) {
        break
    }
    console.log(n)
}