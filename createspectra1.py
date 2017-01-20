from bokeh.plotting import figure
from bokeh.io import output_file, show
from bokeh.resources import CDN
from bokeh.embed import autoload_static
from bokeh.models import HoverTool
from astropy.io import fits
import numpy as np

#Get data
srfm = fits.open('VI_SRFM_577734_2011-06-24T05:56:42.518_G475_MR_402230_Q4_hi.fits')
secondstar = srfm[0].data[2]

#For srfm[0].header["CTYPE1"] = 'LINEAR'
xn = srfm[0].header["NAXIS1"]
refx = srfm[0].header["CRVAL1"]
step = srfm[0].header['CD1_1']
cr = srfm[0].header['CRPIX1']

xlist = [ refx + step*(i - cr) for i in np.arange(1, len(secondstar)+1) ]

name = 'spectraap2cx25'

hover = HoverTool(
        tooltips=[
            ("index", "$index"),
            ("(x,y)", "($x{1}, $y)"),
        ]
    )

plot = figure(x_axis_label='X', y_axis_label='Y')
plot.add_tools(hover)
plot.line(xlist,secondstar)
output_file(name+'try.html')
show(plot)

#create html and js for standalone


#Js is a js file that provides data for the plot and the tag is the tag to include in the html document.
js, tag = autoload_static(plot, CDN, "{{site.baseurl}}/images/bokehgraphs/"+name+".js")

##To save it in files

with open(name+'.js','w') as jsfile:
	jsfile.write(js)

with open(name+'.html','w') as htmlfile:
	htmlfile.write(tag)
