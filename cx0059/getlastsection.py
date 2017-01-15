#!/usr/bin/python2

from astropy.io import fits
import numpy as np

ssem = fits.open('VI_SSEM_575273_2011-05-26T05:19:50.824_G475_MR_202166_Q2_hi.fits')
header1 = ssem[0].header
header1['NAXIS2'] = 1

fits.writeto('lastmedian.fits', np.median(ssem[0].data[0:80,:], axis=0)  ,header1)          
mediannorm = [ i/np.max(ssem[0].data) for i in np.median(ssem[0].data[0:80,:],axis=0)]  
fits.writeto('lastmediannorm.fits', mediannorm  ,header1)
