# Chapter Profile: Year 8 Chapter 19
## Statistics — comparing means and medians

### Scope and topic mapping
The current Year 8 taxonomy names this chapter **Statistics** and its topic
`y8-19a` **Comparing means and medians**. Existing questions in
`content/chapters/y8-19.json` cover calculating and interpreting means/medians
from raw lists and stem-and-leaf plots, constructing/reading stem-and-leaf
plots, comparing centres when data contain outliers, and using a known mean to
reason about missing values. Dot plots and range are appropriate when they are
part of a source statistics question in this chapter.

### Standard solution methodology
- Read the data display carefully. A stem-and-leaf plot records the tens digit
  as the stem and the units digit as a leaf; leaves within each stem are ordered.
- For a dot plot, count the frequency of every data value first, draw and label
  an equally spaced number line, then stack one dot for each observation. Check
  that the total number of dots equals the number of observations.
- Mean: calculate the sum of all values and divide by the number of values.
  For frequency data, use `sum(value × frequency)` and check that frequencies
  sum to the sample size.
- Median: use ordered data. For odd `n`, select position `(n+1)/2`; for even
  `n`, average positions `n/2` and `n/2+1`.
- Range: subtract the minimum from the maximum.
- If a mean and some missing data are given, calculate the total as
  `mean × number of values`, subtract the sum of known values, and apply the
  ordering/position restrictions of the data display before enumerating valid
  possibilities.
- When comparing mean and median, explain how an outlier affects the mean and
  whether the median better represents a typical value.

### Common student pitfalls
- Counting leaves/observations incorrectly or using the number of distinct
  values instead of the total frequency as `n`.
- Finding a median before ordering the data; for even `n`, selecting only one
  middle value instead of averaging the two.
- Dividing by the wrong sample size when finding the mean.
- Reading a stem-and-leaf plot as separate digits, or ignoring ascending leaf
  order when identifying possible missing values.
- Finding the range by adding the extremes or using the second-largest value.
- Treating the mean as resistant to outliers when explaining which centre is
  more representative.

### Source alignment
Profile established from the existing Year 8 Chapter 19 topic and exemplars in
`content/chapters/y8-19.json`, the connected Chapter 19 exam practice items, and
Question 10 plus its worked solution in the Fort Street High School Year 8
Task 4 (2020) PDF.
