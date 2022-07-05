<template>
<div class="js-this">
<pre>
<code>
// 隐式
function foo() { console.log(this.a) }
const obj = { a: 2, foo: foo }
obj.foo() // 2

// 链式隐式
function foo() { console.log(this.a) }
const obj1 = { a: 1, obj2: obj2 }
const obj2 = { a: 2, foo: foo }
obj1.obj2.foo() // 2

// 显式绑定
function foo() { console.log(this.a) }
const obj1 = { a: 2 }
foo.call(obj1) // 2

// 显式绑定 强绑定
function foo() { console.log(this.a) }
const obj1 = { a: 2 }
function bar() { foo.call(obj1) }
bar() // 2
bar.call({a: 4}) // 2

</code>
</pre>
</div>
</template>

<style scoped>
.js-this {
  background:#eee;
}
</style>
