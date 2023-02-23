import UIKit
import XCPlayground

//make URL of google feed api
var urlString = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://rss.itmedia.co.jp/rss/2.0/news_bursts.xml&num=8"
var url = NSURL(string: urlString)

//download by NSSession
var task = NSURLSession.sharedSession().dataTaskWithURL(url!, completionHandler:{data, response, error in
    //convert json data to dictionary
    var dict = NSJSONSerialization.JSONObjectWithData(data, options: NSJSONReadingOptions.MutableContainers, error: nil) as! NSDictionary
    
    println(dict)
})

task.resume()

XCPSetExecutionShouldContinueIndefinitely(continueIndefinitely: true)