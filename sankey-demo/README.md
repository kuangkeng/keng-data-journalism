A D3 Sankey Diagram Documentation for Foreign Policy
====================
Here are the steps to produce and customize a sankey diagram using d3.js. The code was modified from <a href="https://gist.github.com/d3noob/5015397">d3noob version</a> which used d3.js and the <a href="https://github.com/d3/d3-plugins/tree/master/sankey">sankey plugin</a>. 

Prepare Data
====================
<ol>
 <li>Clean your data and format according to data.xls (sheet 1). Keep the wording of column header (first row) - 'source', 'target', 'value'. Double check your data. Remove data with 0 and negative value. </li>
 <li>Use a pivot table (or your own methods) to make a list of all sources and targets under the column header of 'name' (sheet 2).</li>
 <li>Pick the colors for each name, they can be same or different. Put them in the 'color' column.</li>
</ol>  

Input Data
====================
<ol>
 <li>Copy the formatted data in sheet 1 and covert them into json format using <a href="http://shancarter.github.io/mr-data-converter/">Mr Data Converter</a>. Repeat the same for sheet 2.</li>
 <li>Paste the json data into data.json. Use sheet 1 data in first part "links", and sheet 2 in seconda part "nodes". Nodes are the rectangular blocks in the sankey diagram and links are the flow lines that join the blocks. Make sure the syntax is correct.</li>
</ol>  

