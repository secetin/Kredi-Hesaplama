
# react-kredi-hesaplama
Loan calculator component  build with React

This reusable react-native component could be used in any App where such an calculation is needed.

 <LoanCalculator /> 
 
Example of props:  {...}
 
        valueD={24}  - duration of loan in months , default - 24
        stepD={12}  - step of duration of loan slider in months, default - 12
        maxD: 72    - max value of duration of loan slider in moths , default - 72
        minD: 12    - min value of duration of loan slider in moths , default - 12
        valueA={1000}  - amount of loan in currancy choosen , default - 1000
        stepA={1000} - step of amount of loan slider in currancy choosen , default - 1000
        maxA={100000}   - max value  of amount of loan slider in currancy choosen , default - 100000
        minA={1000}   - min value of duration of loan slider in moths , default - 12
        
        APR DEPENDS on CREDIT HISTORY, YOU CAN SET TO YOUR OWN RATE
        
        APR1={3.6}  in %  , EXCELLENT
        APR2={8.7}  in %  , GOOD
        APR3={12.3} in %  , FAIR
        
        currancy={TL},   - currancy , default TL


