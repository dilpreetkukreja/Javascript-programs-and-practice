Dear 'Ajax in Action' Readers,

This zip file gathers together the source code for the examples in the 'Ajax in Action' book. Code is organized by chapter, and, within each chapter, subfolders for the original and the refactored versions of the example. The folder 'video' contains the code examples created for the 'Ajax in Action' video that can be downloaded from Manning's web site.

Chapter 1: has no code in it, so nothing to see here!

Chapter 2: Folder ch02 contains the CSS examples from this chapter. The stylesheet for the minimal 'skeleton' look can be swapped in by changing the commented-out <link> tag.

Chapter 3: Folder ch03 contains the initial ContentLoader object, and the Rico accordion example

Chapter 4: Folder ch04 contains both versions of the 'mousemat' example, and both versions ofthe 'musical keys' example.

Chapter 5: Folder ch05 popups.html is the entry point for the various data retrieval examples. Swap in the commented-out <script> tags in lines 14-18 to run the examples using Content-centric, Script-centric (iframe), script-centric (eval), and Data-centric (XML or JSON) approaches.planets.html shows the Object BRowser in action.

Chapter 6: ch06/msgtest.html is the entry point for the main notification system example in this chapter. ch06/planets.html revisits the example from chapter 5, with inline notifications added in.

Chapter 7: ch07/googleSoap.html is the google guessing game example used to illustrate web services and the server-of-origin policy. Noter that you'll need to get your own googfle API license key as described in the book, if you want to run this example, and add it to the html file at line 12.

Chapter 8: Folder ch08 contains the examples here. domtree_profiled.html, dotnotation_profiled.html and loop_profiled.html are the tests of conventional javascript wisdom. mousemat_profiled.html applies the profiler to the mousemat example from chapter 4. clickbox.html is the performance example.

AJAX BY EXAMPLE: Chapters 9-13 (Folders ch09 - ch13)
We've picked a variety of server technologies - VB.Net, C#, PHP and Java (and the video is backed by some Perl scripts) - and getting all the back-end data feeds working can be a daunting task, as our proof-readers can attest! It may be that you want to get the full example working end-to-end, or it may be that you want to focus on what the client code (i.e. the JavaScript) is doing. To this end, we've provided a set of mock data to run each client against, as well as the live data generation code that runs on the server. The version that uses the mock data has '_static' appended to the filename. So, for example, the double combo example (ch9) has two html files under the 'original' folder:
 - DoubleCombo.htm points at the VB.Net back end
 - DoubleCombo_static.htm points at the mock data
 
The htm file in the 'refactored' folder has '_refactored' appended to the title.

As a bonus, chapter 10 also has a debug version of the refactored code, that uses the debug console described in appendix A. 

We'll be releasing further versions of this zip file as we add more back-end implementations, and improve the documentation. Your feedback is welcome.

Regards,

Dave Crane
Gloucestershire UK
November 2005 

