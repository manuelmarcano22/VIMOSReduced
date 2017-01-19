find . -name *.fits | tar -czvf current-fits.tar.gz --files-from -
scp current-fits.tar.gz root@jupyter.manuelpm.me:/var/www/transfer.manuelpm.me
