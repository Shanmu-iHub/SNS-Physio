import os
import glob
import re

# Standardized Tailwind Config for SNS College of Physiotherapy
NEW_TAILWIND_CONFIG = """
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#f4f5f9',
                            100: '#e8eaf2',
                            200: '#d1d5e6',
                            300: '#babfd9',
                            400: '#a4a9cc',
                            500: '#9298CB',
                            600: '#7a7fac',
                            700: '#62668d',
                            800: '#4b4e6e',
                            900: '#33354f',
                            DEFAULT: '#9298CB',
                        }
                    }
                }
            }
        }
"""

def rebrand_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Title and Meta Tags
    content = content.replace("SNS College of Physiotherapy", "SNS College of Physiotherapy")
    content = content.replace("Design Thinking CBSE School", "Design Thinking Physiotherapy College")
    content = content.replace("CBSE school in Coimbatore", "Physiotherapy college in Coimbatore")
    content = content.replace("Nursery to Grade XII", "Bachelor and Master of Physiotherapy (B.P.T & M.P.T)")
    content = content.replace("CBSE curriculum", "Physiotherapy curriculum")
    content = content.replace("CBSE Affiliation: 1930610", "Affiliated to TN Dr. M.G.R. Medical University")
    content = content.replace("Affiliation: 1930610", "Affiliation: TN Dr. M.G.R. Medical University")
    content = content.replace("CBSE Grade", "Professional Year")
    content = content.replace("Grade XII", "Final Year")
    content = content.replace("Grade X", "2nd Year")
    
    # 2. Update Tailwind Config (Already handled in first run, but ensure it's correct)
    if 'tailwind.config' in content:
        config_pattern = r'tailwind\.config\s*=\s*\{.*?\}(?=\s*</script>)'
        content = re.sub(config_pattern, NEW_TAILWIND_CONFIG.strip(), content, flags=re.DOTALL)

    # 3. Update Contact Info
    content = content.replace("SNS College of Physiotherapy,", "SNS College of Physiotherapy,")
    content = content.replace("Thudiyalur - Saravanampatti Road,", "SNS Kalvi Nagar, Sathy Main Road (Opp. CRI Pumps),")
    content = content.replace("Vellakinar Post,", "Kurumbapalayam (Po),")
    content = content.replace("Coimbatore - 641029", "Coimbatore \u2013 641 107") # \u2013 is en-dash
    content = content.replace("Coimbatore - 641 107", "Coimbatore \u2013 641 107")
    
    # Phone
    content = content.replace("+91 96299 37861", "+91 90036 55855")
    content = content.replace("+91 75300 93730", "09840246474")
    
    # Email
    content = content.replace("info@snsacademy.org", "snsphysio@gmail.com")
    content = content.replace("job@snsgroups.com", "snsphysio@gmail.com")

    # 4. Update Colors in Body (Utility classes)
    # Replace orange- derivatives with primary-
    content = re.sub(r'(bg|text|border|hover:bg|hover:text|from|to|via)-orange-(\d+)', r'\1-primary-\2', content)
    # Replace blue- derivatives with primary-
    content = re.sub(r'(bg|text|border|hover:bg|hover:text|from|to|via)-blue-(\d+)', r'\1-primary-\2', content)

    content = content.replace("school days", "college days")
    content = content.replace("Our school", "Our college")
    content = content.replace("at school", "at college")
    content = content.replace("schooling", "medical education")
    content = content.replace("School Timings", "College Timings")
    content = content.replace("School ID", "College ID")
    content = content.replace("school uniform", "college dress code")
    content = content.replace("School Campus", "College Campus")
    content = content.replace("school community", "college community")
    content = content.replace("school philosophy", "college philosophy")
    content = content.replace("NAME OF THE SCHOOL", "NAME OF THE COLLEGE")
    content = content.replace("SCHOOL CODE", "COLLEGE CODE")
    content = content.replace("SCHOOL EMAIL ID", "COLLEGE EMAIL ID")
    content = content.replace("every child", "every student")
    content = content.replace("each child", "each student")
    content = content.replace("your child", "the student")
    content = content.replace("child's unique potential", "student's unique potential")
    content = content.replace("Entrepreneurial Mindset", "Healthcare Excellence")
    content = content.replace("building an Entrepreneurial Mindset", "building clinical excellence")
    content = content.replace("redesigning common minds", "empowering future healers")
    content = content.replace("Common Minds & Business", "Future Healers & Healthcare")
    content = content.replace("Business Towards Excellence", "Healthcare Towards Excellence")

    # Update bitrix.html branding if it's the bitrix.html file specifically
    if "bitrix.html" in filepath:
        content = content.replace("Admission and Enquiry Form - SNS College of Physiotherapy", "Admission and Enquiry Form - SNS College of Physiotherapy")
        content = content.replace("SNS College of Physiotherapy", "SNS College of Physiotherapy")

    # 4. Update Colors in Body (Utility classes)
    # Replace orange- derivatives with primary-
    content = re.sub(r'(bg|text|border|hover:bg|hover:text|from|to|via)-orange-(\d+)', r'\1-primary-\2', content)
    # Replace blue- derivatives with primary- (except for static/images/ links)
    content = re.sub(r'(bg|text|border|hover:bg|hover:text|from|to|via)-blue-(\d+)', r'\1-primary-\2', content)

    # Update CSS gradients in style tags
    content = content.replace("#626bad", "#7a7fac")
    content = content.replace("#9298CB", "#9298CB") # Keep primary
    content = content.replace("#7a82bc", "#a4a9cc")
    content = content.replace("#babfe1", "#babfd9")
    
    # Update Bitrix button color if present
    content = content.replace("#e94a28", "#9298CB")
    content = content.replace("#d43d1f", "#7a7fac")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    # Find all HTML files in subdirectories
    html_files = glob.glob('**/index.html', recursive=True)
    # Also include the secondary root files if any (though index.html at root is handled separately usually, we can include it)
    root_htmls = glob.glob('*.html')
    
    all_files = set(html_files + root_htmls)
    
    for filepath in all_files:
        if 'node_modules' in filepath or 'src/' in filepath:
            continue
        # Skip files that should not be rebranded automatically if any
        # But for now, we want everything consistent.
        rebrand_file(filepath)

if __name__ == "__main__":
    main()
