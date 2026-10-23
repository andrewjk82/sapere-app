# Chapter Profile: Year 8 Chapter 19 — Statistics

## Source scope and topic mapping

This profile is based on the supplied ICE-EM Year 8 Book 2 sections 19A, 19B,
and 19C. Keep questions in the matching curriculum topic; do not place every
statistics question under 19A merely because all three sections are in Chapter
19.

| Section | Source heading | Core concepts | Matching question types |
| --- | --- | --- | --- |
| 19A | Comparing means and medians | Mean, median, range, stem-and-leaf plots, outliers and representative centre, missing values constrained by a data display | Calculate/interpret mean or median; read/create stem-and-leaf plots; compare centre; find range; use a known mean to determine missing data |
| 19B | Sampling data | Population, census, sample, simple random sample, representative sampling, random selection and generalising from a sample | Identify population/sample/census; choose or assess a sampling method; explain bias, representativeness, and limits on generalisation |
| 19C | Variation of means and proportions | Categorical and numerical data; frequency and relative frequency/proportion; percentages; sample proportions; sample means; variability across samples; effect of sample size | Calculate category proportions/percentages; read or construct frequency displays; calculate sample means; compare variation between sample statistics and sample sizes |

### Current repository taxonomy and placement rule

The live chapter file currently exposes only topic `y8-19a`, **Comparing means
and medians**. The supplied Task 4 2020 Year 8 Question 10 asks students to
represent sibling counts with a dot plot, calculate a mean, median, and range,
and use a stem-and-leaf plot plus a known mean to find possible missing marks.
Those tested skills are all from 19A, so its leaves belong under `y8-19a`.
Question 10 does not test sampling methods from 19B or variation of sample
statistics/proportions from 19C. Do not create empty topic entries or relabel
this question as 19B/19C solely because those sections are now available.

When a future source tests 19B or 19C, first add/use the corresponding topic in
the Year 8 chapter taxonomy, then map each leaf to that topic. Until that
taxonomy is present, keep unmatched questions out of 19A and record them as
held for the topic mapping rather than forcing a placement.

## 19A — Comparing means and medians

### Standard solution methodology

- Read the display carefully. In a stem-and-leaf plot the stem gives the
  leading digit(s), the leaf gives the final digit, and leaves are ordered.
- For a dot plot, count the frequency of each value, use equal spacing on the
  number line, and check that the number of dots equals the number of data
  values.
- Mean: add the values and divide by the total number of observations. For
  frequency data, calculate `sum(value × frequency)` and check that the
  frequencies add to the sample size.
- Median: sort the data. For odd `n`, use position `(n+1)/2`; for even `n`,
  average the values in positions `n/2` and `n/2+1`.
- Range: subtract the minimum from the maximum.
- For missing values with a known mean, find the total with
  `mean × number of values`, subtract the known values, then apply the order
  and display constraints to enumerate valid possibilities.
- When comparing mean and median, explain how extreme values affect the mean
  and whether the median better represents a typical value.

### Common student pitfalls

- Counting distinct values instead of all observations/frequencies.
- Finding a median before ordering the data, or using only one middle value
  for an even number of observations.
- Dividing by the wrong sample size when calculating a mean.
- Reading a stem-and-leaf plot as separate digits or ignoring leaf order.
- Calculating range by adding the extremes or using a non-extreme value.
- Claiming that the mean is unaffected by outliers.

## 19B — Sampling data

### Standard solution methodology

- Identify the population as the complete group the investigation is about.
- Identify the sample as the selected subset from which data are collected.
- A census collects information from every member of the population; use this
  term only when all members are included.
- A simple random sample gives every population member an equal chance of
  selection, with selections made independently.
- Evaluate whether the population matches the claim being investigated and
  whether the selection method systematically favours or excludes a group.
- Limit conclusions to what the sample and its selection method justify. A
  biased or narrow sample does not support broad generalisations.

### Common student pitfalls

- Confusing the population with the sample.
- Calling a survey a census when it includes only some members.
- Assuming a large sample is automatically representative.
- Calling a convenient or self-selected group a simple random sample.
- Generalising from a sample to a population that it does not represent.

## 19C — Variation of means and proportions

### Standard solution methodology

- Classify each variable: categorical data are labels/groups; numerical data
  are measured or counted values.
- For a category, calculate relative frequency as
  `category frequency ÷ total sample size`; multiply by `100%` for a
  percentage. Check that category frequencies total the sample size and
  proportions total `1` (or percentages total `100%`, allowing rounding).
- Calculate a sample mean by adding all numerical observations and dividing
  by the sample size.
- A sample statistic (such as a mean or proportion) can vary from sample to
  sample even when samples come from the same population.
- Compare the spread of sample statistics across repeated samples. In the
  supplied rod example, means from samples of 100 vary less than means from
  samples of 20; describe the observed variation without claiming that every
  larger sample gives the exact population value.
- For graphs/tables, label categories, frequencies, sample size, and units;
  distinguish raw counts from relative frequencies.

### Common student pitfalls

- Dividing category frequency by the number of categories instead of the
  sample size.
- Confusing a frequency/count with a proportion or percentage.
- Using the wrong denominator when converting a count to a sample proportion.
- Treating one sample statistic as the exact population value.
- Claiming sample means do not vary, or overlooking that larger samples in
  the source examples vary less.
- Drawing a graph with missing labels, inconsistent scales, or bars/dots that
  do not match the recorded frequencies.

## Source alignment

- Section 19A: supplied `Y8 Ch19A.pdf`, textbook pages 272–277.
- Section 19B: supplied `Y8 Ch19B.pdf`, textbook pages 278–279.
- Section 19C: supplied `Y8 Ch19C.pdf`, textbook pages 280–285.
- Task 4 alignment: Fort Street High School, Year 8 Task 4 (2020), Question
  10, pages 16–17. The represented data, mean, median, range, and constrained
  missing marks align with 19A as explained above.
