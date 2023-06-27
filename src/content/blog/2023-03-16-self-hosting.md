---
title: Self Hosting
date: 2023-03-16T23:56:50+07:00
layout: ../../layouts/Article.astro
tags: 
- self-hosting
---

I've been hosting my own software for a while. It's a simple setup with only 2 machines: 
1. a raspberry pi for dns caching/blocking 
2. actual server for hosting applications.
The raspberry pi runs [Pi-hole](https://pi-hole.net/), and the server runs [True nas scale](https://www.truenas.com/truenas-scale/). 

In this post I'll be giving an overview of hosting your own applications at home and providing some resources. 

## 1. Beginning
### What is self hosting
Simply put, it's when you host your own services. This might be at home on a dedicated computer or 

### Why self hosting
Computer services depend on the people or companies that keep those services up. It all depends on the them. Self hosting, on the other hand, keeps you in control of your own data and how it's used.

## 2. Run Through
### Overview
In order to self host your applications, you will need to install linux on a physical device at home,  give it internet connection, and install some software. That's it. 

The complex parts lie in choosing the hardware, the internet connection details, and the software themselves.

### Hardware
I recommend using physical devices for setting up your servers. This is because you probably have some around, and it's simple to fix when errors arise; you just format the drive and start over. I also think with remote servers, you have to be a bit more careful when hosting sensitive data of yourself or your family.

With my setup, The server mostly sits idly, so performance or speed should not be your main concern. I say use an old PC at home or get a cheap second hand server. The important part should be storage. 1-2 Terabytes of storage should be fine for a single person and an ssd to hold the operating system would be better for access speed.

### OS
Most people use linux, with the distribution you're most comfortable with. For me it's debian, but lots of people use ubuntu or fedora. Note that you should install the os 'headlessly', or without the 'desktop.'

### Software
Ideally, you'd install what you want inside your machine, but not everything can be self-hosted, so here are some software people install.
- [Nextcloud](https://nextcloud.com/) a web application to manage files, collaboration, workflows. It's like a google suite that you can host yourself
- [Jellyfin](https://jellyfin.org/) a media system to manage and view videos and music
- [Pi-hole](https://pi-hole.net/) a DNS server that has domain blocking capability. You have to install it on a dedicated raspberry pi separate from your server


## 3. Resources
- [Chris Lempa's Channel](https://www.youtube.com/@christianlempa) gives more advanced self-hosted setups
- [/r/selfhosted subreddit](https://www.reddit.com/r/selfhosted/) showcases and Q&A for self-hosting

## End note
This is just a general overview and I would like to make a proper tutorial from start to finish
