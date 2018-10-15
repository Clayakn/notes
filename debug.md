## Notes for Debugging 

**Writing notes for errors that recur so that I can remember how to fix certain errors**

**Error: includes() is not a function**

Problem: includes() was being used on an object and not on string or array 

Solutions: get values from properties of object then use includes() 


**ENOENT: no such file or directory, open '/Users/andrewnam/web-development/personal-projects/dragon-stack/package.json'**

Problem: Package json not found b/c in a parent directory that doesnt contain it

Solutions: CD into the right folder that contains package.json