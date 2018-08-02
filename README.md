# CP Department Intranet 

###### This is fully fledged Intranet for the Birla Vishvakarma Mahavidyalaya College , CP Department.

# select event API documentation:
--must send POST request--

--only parameter : data--

## filter by id:
data : id=1


## filter by Event Name:
data : Event Name=anyevent


## filter by Date From:
data: Date From=mm/dd/yyyy


## filter by time from:
data: Time From=hh:mm:ss

where hh in 24 hour format


## filter by multiple parameters:
--delimit by ";" symbol--

data: Date From=1/2/2017;Time From=2:00:00


## filter by other varchar parameters like sponser, event description, expert:

data: paraname=paravalue;paraname2=paravalue2


## filter by files grater than:
data: ftge=4


## filter by files less than:
data: ftle=4


## filter by images greater than:
data: itge=5


## filter by images less than:
data: itle=5
