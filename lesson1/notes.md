## Languages

Compiled: C, C++, Rust...
Pros:
-Code is fast
-Code is optimized during the compilation
-Compiler can make lots of checks BEFORE building the code

C#, Java -- compiled, but they have runtime or virtual machine.

Cons: 
- You have to compile for each platform
- You need a good compiler

Interpreted languages
Python, JS, Ruby, PHP...

Pros:
- Cross-platform
- Easy to share and update
- You can read the code of the program

Cons
- Code is slow (up to 100x)

JIT-Compiler (Just-in-Time) -- (10x)

## Paradigms

### Imperative
```c
// We just tell what to do
printf("%d", 10); 
```

Split it into modules (functions, different files...)

### OOP (Object-Oriented Programming)

Usually based on classes (due to C++).

```cpp
class A {

}

class A : B {

}
```

- Inheritance
- Encapsulation
- Polymorphism
- Abstraction (also present in all other paradigms)

- SOLID

### Functional

Function is the most important thing.


Clean function -- the function that does not change anything but:
- Local variable
- Arguments
- Return value

Side effects => not clean function

### Declarative

```ruby
class User
    has_many :messages
    belongs_to :account
end
```

## Types

### Static vs Dynamic

Static:
```
auto a = 10; // Type inference -> int
a = "hello" // error!
```
Dynamic:
```ruby
a = 10 # Type inference is still here! 
a = "hello" # no error
if (something)
 a = [100] # Array
else
 a = Date.now # Date, probably that was a bad idea
end


# 100 lines below
# what is an a now???
```

### Strong vs Weak

Implicit vs Explicit

Python: Dynamic Strong
C++: Static Strong (but not so strong...)

JS: Dynamic Weak (really weak!)
