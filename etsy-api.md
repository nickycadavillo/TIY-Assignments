* **How do I make API requests?**
  * What is the base URL for all requests?
    * An example of the base url is ```https://openapi.etsy.com/v2``` and ends with the URL for the command
    * Etsy requires a key at the end of requests and also a question mark and parameters which may look like:
    * ```https://openapi.etsy.com/v2/users/etsystore?api_key=your_api_key```
  * Are there any headers or query parameters required?
    * Rate limit headers are required. You're allowed 10,000 requests per day and 10 per second.
    * Example: ```X-RateLimit-Limit: 10000
X-RateLimit-Remaining: 9924```
    * Query parameters: https://www.etsy.com/developers/documentation/getting_started/api_basics#section_parameter_types
  * What kind of response should I expect?
    * Example: 
    ```
    {
     "count":integer,
     "results": [
         { result object }
     ],
     "params": { parameters },
     "type":result type
     }
     ```
     * The count is the total number of results available which can be more than the number of results returned.  You can set a limit. For example: ```limit=100&offset=0, where offset is a multiple of 100 up to 900``` 
     * The results is an array of the results.  It'll be an array even if there is only one result.
     * The params are the parameters that were passed in the request.
     * The type is the type of obkect in the results array.

* **How does the API handle authentication?**
  * Do I _need_ to authenticate? with user credentials? 
    * We only have provisional access now. This requires signing up for Etsy and registering your app.  When you register, you are assigned a key and a "shared secret".
    * For write access and accessing private user data, you need an OAuth token.
  * What can I do with an unauthenticated request?
    *  With provisional access, you have access to the shops, treasuries, receipts, billing.
  * How can I authenticate my request? (what methods)
    * To get access to an Etsy members private account info, you'll need to request a set of temporary credentials (access token) using your key and "shared secret".  
  
* **What Resource in the API represents...**
     * an individual product? 
       * On Etsy, each individual product is a listing.  https://www.etsy.com/developers/documentation/reference/listing#method_findalllistingactive  
       * To get an individual listing or product, you need to use the getListing method. The URI would be /listings/:listing_id
       * Or if you want to search active listings for a product, you can use the findAllListingActive method using the URI /listings/active
     * a group or collection of products?
       * To search by category, you can use the getCategory method
     * images associated with a product?
       * the Images association returns an array of images for the product
     * sizes and colors for a product?
       * You can use the findAllListingActive method, using the parameter sort_on combined with color
   * **What actions and endpoints exist for each of these Resources?**
   * **What parameters do each endpoint require or accept?**
     * 
   * **What fields are returned for each Resource, specifically:**
     * an individual product?
       *  When you retrieve a listing, you'll get back an array (specifically int)
     * a group or collection of products?
       * 
   * **What _additional_ fields can be requested for each?**
     * You can also get the listing's price, description, quantity, materials used, views, it's dimensions, and even if it's customizable or not.
