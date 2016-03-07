## Basic Columns in Grid Based Design
Overview: Grid based design is a way of creating a responsive website.  A responsive website is one that the user can easily interact with regardless of whether it is a desktop version, tablet or mobile device.  More people are accessing websites through their tablet or mobile devices so designing responsively is an integral part of designing websites.  

### Box Sizing Property
**First, you will need to add the box-sizing property to your container.**

````
   container {
        box-sizing: border-box; 
    }
````

###Creating Columns 
Overview:
A grid is made up of rows and columns of the page. The rows and columns are the selectors.  There are that properties affect how those rows and columns are shown on the page.  
A way to manipulate the columns and rows is to change the percentages of the widths.  If you are looking to create a page that has three columns, you would change the percentages of these columns.

**Secondly, create your columns:**

1. Decide on the number of columns you want to have on the page
2. Divide the number of columns you would like to have by 100
3. The percentage you get from step 2 will be the width property value in each column

*An example for 3 columns would be:*
````
column1{
 width: 33%;
}

column2{
width: 33%;
}

column3{
width:33%;
}
````

### Gutters

**Third, create gutters which space out the columns evenly:**
1. Add the padding property to each of the column selectors
2. Set the padding-right value the same for all of the columns except the last one
3. 


*An example for the gutters for 3 columns would be:*
````
column1{
 width: 33%;
 padding-right: 10px;
}

column2{
width: 33%;
padding-right: 10px;
}

column3{
width:33%;
padding-right: 0px;
}
````

### Done!
