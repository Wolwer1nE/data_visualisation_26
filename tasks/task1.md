## Numerical Integration

Implement basic numerical integration methods such as the trapezoidal rule and Simpson's rule. 
Use JS as the programming language to create functions that take a function, an interval, and the number of subintervals as inputs and return the approximate value of the integral.
Implement the automated step size selection for both methods to achieve a desired accuracy. 
The formula for the trapezoidal rule is:

$$
\int_a^b f(x) \, dx \approx \frac{h}{2} \left( f(x_0) + 2 \sum_{i=1}^{n-1} f(x_i) + f(x_n) \right)
$$

The formula for Simpson's rule is:

$$
\int_a^b f(x) \, dx \approx \frac{h}{3} \left( f(x_0) + 4 \sum_{i=1}^{n/2} f(x_{2i-1}) + 2 \sum_{i=1}^{n/2-1} f(x_{2i}) + f(x_n) \right)
$$

Where:

- $h$ is the width of each sub-interval, calculated as $h = \frac{b - a}{n}$

Create a simple html page to demonstrate the functionality of your numerical integration methods. The page should allow users choose a predefined function, specify the interval and number of sub-intervals, and display the results of both integration methods.

No specific visual design is required, but good-looking and user-friendly interfaces are encouraged. 
This task should be completed in a single HTML file with embedded JavaScript or you may use external scripts.
Classes are encouraged.
But you can use objects and that is totally fine.

## Deadline

Deadline is 10-10-2026.

Submit by sending a link to your GitHub repository or a an HTML file to the instructor in Teams.