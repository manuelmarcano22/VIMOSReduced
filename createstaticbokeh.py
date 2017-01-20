from bokeh.resources import CDN
from bokeh.plotting import figure
from bokeh.embed import autoload_static

name= 'exampleplot'

#Plot commands
plot = figure()
plot.circle([1,2], [3,4])

#Js is a js file that provides data for the plot and the tag is the tag to include in the html document.
js, tag = autoload_static(plot, CDN, "{{site.baseurl}}/images/bokehgraphs/"+name+".js")

##To save it in files

#with open(name+'.js','w') as jsfile:
#	jsfile.write(js)

#with open(name+'.html','w') as htmlfile:
#	htmlfile.write(tag)
