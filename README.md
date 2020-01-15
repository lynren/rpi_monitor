# RPI Monitor
<hr>

> A node.js server gathering and displaying resource information on Raspberry PIs running <a href="https://www.raspberrypi.org/downloads/raspbian/">Raspbian</a>.

The purpose of RPI Monitor is to allow users to monitor hardware/resource statistics of their RPI device without having to SSH. Instead, a node.js server is gathering and serving the statistics to requests at port 9999.

## Requirements
RPI Monitor requires a few npm packages:

- _express_, to make use of express routes
- *child_process*, used by the server to execute Bash commands
